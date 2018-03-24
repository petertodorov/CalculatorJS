const Calculator = require('./../model/calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost:(req,res)=>{
        let calculator = new Calculator();
        let input = req.body['calculator'];
        calculator.leftOperand = Number(input.leftOperand);
        calculator.rightOperand = Number(input.rightOperand);
        calculator.operator = input.operator;
        res.render('home/index', {calculator:calculator, result:calculator.calculateResult()});
    }
};