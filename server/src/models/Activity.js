const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Activity',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.ENUM('Buceo', 'Circuito Gastronomico', 'Circuito de Museos', 'Excursiones', 'Escalada', 'Libre Elección', 'Parapente', 'Paseo en Bicicleta', 'Senderismo'),
            allowNull: false,
          },
        difficulty: {
            type: DataTypes.ENUM('1 (Sin Dificultad)', '2 (Dificultad Baja)', '3 (Dificultad Media)', '4 (Dificultad Alta)', '5 (Dificultad Extrema)'),
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno' , 'Primavera'),
            allowNull: false,
        }
    },{timestamps: false})
}