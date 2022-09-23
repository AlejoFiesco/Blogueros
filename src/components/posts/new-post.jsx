import './post.styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const NewPost = () => {
  const maxLength = 255;

    const initialValues = {
      title: '',
      content: '',
      visibility: 'public',
      time: ''
    };

    const visibilities = ['public', 'friends','private'];

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

    const changeVisibility = () => {
      if(values.visibility === visibilities.at(-1)){
        setFieldValue("visibility", visibilities[0]);
        return;
      }
      let i = visibilities.indexOf(values.visibility) + 1;
      setFieldValue("visibility", visibilities[i])
    };

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched } = formik;

    return (
      <div className='post letra-clara'>
          {/*<h1 className='container-title'>New post</h1>*/}
          <form className='inner-post' onSubmit={handleSubmit}>
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

            <span className="select-visibility" onClick={ changeVisibility }> { values.visibility } <i class="fa-solid fa-rotate"></i> </span>

            <button type="submit">Post!</button>
          </form>
      </div>
    );
}
