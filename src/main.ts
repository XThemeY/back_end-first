import { app } from './app';
import { SETTINGS } from './config/constants';

app.listen(SETTINGS.PORT, () => {
	console.log('...server started in port ' + SETTINGS.PORT);
});
