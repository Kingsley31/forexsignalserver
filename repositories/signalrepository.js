const Signal=require('../models/index.js').Signal;

const storeSignal=(signalBody)=> {
    return Signal.create(signalBody);
};


const getAllSignals=()=>{
    return Signal.findAll({
        attributes: ['signalName','paid','trade_id','prediction','createdAt']
      });
};


const getFreeSignals=()=>{
    return Signal.findAll({where: {
        paid: 0
      },
      attributes: ['signalName','paid','trade_id','prediction','createdAt']
    });
};

module.exports={storeSignal,getAllSignals,getFreeSignals};