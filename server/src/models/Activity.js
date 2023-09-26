const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Activity',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.ENUM('Buceo', 'Circuito Gastronomico', 'Circuito de Museos', 'Día de Shopping', 'Excursiones', 'Escalada', 'Libre Elección', 'Parapente', 'Paseo en Bicicleta', 'Paseo por la Ciudad', 'Senderismo'),
            allowNull: false,
          },
        difficulty: {
            type: DataTypes.ENUM('Sin Dificultad', 'Dificultad Baja', 'Dificultad Media', 'Dificultad Alta', 'Dificultad Extrema'),
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Primavera', 'Verano', 'Invierno' , 'Otoño'),
            allowNull: false,
        }
    },{timestamps: false})
}