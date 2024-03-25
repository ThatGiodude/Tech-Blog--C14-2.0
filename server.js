require('dotenv').config();
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

//setup session
const sess = {
  secret: 'supersecretsessionsecrettext',
  cookie: { maxAge: 180000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//handlebars initialization
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

//use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});