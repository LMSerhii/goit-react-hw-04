import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoIosSearch } from 'react-icons/io';
import { IconContext } from 'react-icons';
import * as Yup from 'yup';

import css from './SearchForm.module.css';

const SearchBarSchema = Yup.object().shape({
  query: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

export const SearchForm = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={onSubmit}
        validationSchema={SearchBarSchema}
      >
        <Form className={css.form}>
          <div className={css.searchBox}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.btn} type="submit">
              <IconContext.Provider value={{ size: '1.3em' }}>
                <IoIosSearch />
              </IconContext.Provider>
            </button>
            <ErrorMessage
              className={css.invalidMsg}
              name="query"
              component="span"
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
};
