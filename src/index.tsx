import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Interface } from 'readline';


    

var cardsList:any = [
{
    id: 1,
    title: 'ベンダーWallet比較一覧作成',
    description: 'ベンダーWallet比較一覧作成せねばならん',
    status: 'in-progress',
    tasks: [],
  },
  {
    id: 1,
    title: 'Quorumノード追加shell script作成',
    description: 'Quorumノード追加shell script作成せねばならん',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'チェックリスト1',
        done: true,
      },
      {
        id: 2,
        name: 'チェックリスト2',
        done: false,
      },
    ],
  }
];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
serviceWorker.unregister();