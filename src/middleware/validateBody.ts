import { NextFunction, Request, Response } from 'express';
import { AppError, BadRequest, InternalException} from 'custom-exceptions-express';
import { AxiosError } from 'axios';

//prettier-ignore
type ControllerFunction = (req: Request<any>, res: Response,next: NextFunction) => Promise<void>;

export const validate = (controller: ControllerFunction  ) => {
	return async (req: Request, _res: Response, next: NextFunction) => {
		try {
			await controller(req, _res, next);

			next();
		} catch (e) {
			
			console.log(e);
			

			let exception;
			if (e instanceof AppError) {
				exception = e;
			} 
            else if (e instanceof AxiosError) {

				const status = e.response?.status || 500;
				const message = e.response?.data || 'Axios request failed';

				if (status === 404) {
					exception = new BadRequest(message);
				} else {
					exception = new InternalException('Axios error', message);
				}
			} 
            else {
				exception = new InternalException( 'Internal server error', (e as any).message);
			}

			next(exception);
		}
	};
};
