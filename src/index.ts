import 'dotenv/config';
import app from './app';
import { SETTINGS } from './config/constants';

app.listen(SETTINGS.PORT, () => {
	console.log('Server started in port ' + SETTINGS.PORT);
});
