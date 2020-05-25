import React from 'react';

const Category = (props) => {
  return (
    <div id='category_div'>
        <img id='category_img' src={props.img_url} />
        <div id='category_words_div'>
            <p className='category_word' id='category_category'>{props.category_category}</p>
            <p className='category_word'>{props.category_word1}</p>
            <p className='category_word'>{props.category_word2}</p>
            <p className='category_word'>{props.category_word3}</p>
        </div>
    </div>
  )
}

export default Category;
