import { Sequelize } from 'sequelize'

  export const sequelize = new Sequelize( 
  'projectsdb', 
  'admin', 
  'Valores7%',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);