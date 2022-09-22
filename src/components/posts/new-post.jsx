import './post.styles.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const NewPost = () => {
  const maxLength = 255;

    const initialValues = {
      title: '',
      content: '',
      visibility: '',
      time: ''
    };

    const validationMessages = {
      required: 'Must fill this field'
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
                          .required(validationMessages.required),
        content: Yup.string()
                          .required(validationMessages.required),
        visibility: Yup.string()
                          .required(validationMessages.required),
      });

    const onSubmit = () => { 
      console.log('submitted');
    };

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik;

    return (
      <div className='post letra-clara'>
          <h1 className='container-title'>New post</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder='Title' 
              className='title'
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.title }
            />
            {errors.title && touched.title && <span className='notification'>{ errors.title }</span>}

            <div className="description">
              <textarea 
                type="text" 
                name="content" 
                id="content" 
                className='content'
                placeholder='Content' 
                onChange={ handleChange }
                onBlur={ handleBlur }
                value={ values.content }
                maxLength={ maxLength }
              />
              <span>{ values.content.length +" / "+ maxLength }</span>
            </div>
            {errors.content && touched.content && <span className='notification'>{ errors.content }</span>}

            <button type="submit">Post!</button>
          </form>
      </div>
    );
}
