import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import AutoComplete from './autocomplete';

const tabItems = [ {
    title: 'Cats',
    content: 'Leo is a known cat'
}, {
    title: 'Dogs',
    content: 'Lyssa is a dog. Woof.'
}, {
    title: 'Sloths',
    content: 'No known sloths :('
}];

const list = ["cats", "kittens", "puppies", "puppers", "pups", "lizards", "birds", "bees", "kittycats"];

const Root = (params) => {
    return(
        <div>
            <div><Clock /></div>
            <div><Tabs tabItems={tabItems}/></div>
            <div><AutoComplete list={list}/></div>
        </div>
    )
}

export default Root;