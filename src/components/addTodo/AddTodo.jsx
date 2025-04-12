import React, {useState} from 'react';

export const AddTodo = ({onAdd}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim()){
            onAdd(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'}
                   value={text}
                   onChange={e => setText(e.target.value)}
            />
            <button type={'submit'}>Добавить</button>
        </form>
    );
};
