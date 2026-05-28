import { Express } from 'express';

config();

const port = process.env.PORT || 8000;
const app = express();

app.use(urlencoded({ extended: true }));

app.locals.appTitle = process.env.APPTITLE || 'Building full-featured applications';

app.use('/', router);

app.listen(port);
