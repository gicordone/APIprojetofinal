// Referenciar user e tasks 
use('bancodaapi');
db.users.aggregate(
  [
    {$match: {
      _id: ObjectId('631c1d98d6efefc5720f5d86')
    }
    }, 
  {
    $lookup: {
      from: 'tasks',
      localField: '_id',
      foreignField: 'user',
      as: 'task'
    }
  }
  ]
).pretty(); 