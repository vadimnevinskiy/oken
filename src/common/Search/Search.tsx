import React from 'react';
import classes from './Search.module.css';
import { Field, Form } from 'react-final-form';
import { SearchType } from '../../types/types';

type PropsType = {
  searchBook: (value: SearchType) => void;
  resetSearch: (reset: () => void) => void;
};
const Search: React.FC<PropsType> = ({ searchBook, resetSearch }) => {
  return (
    <div className={classes.header + ' blue darken-3 z-depth-4'}>
      <Form
        onSubmit={searchBook}
        render={({ handleSubmit, form, submitting, pristine, values }: any) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.form}>
              <div className="row">
                <div className="col s5 m7 l8 xl9">
                  <div className="input-field">
                    <Field id="searchText" type="text" name="searchText" component="input" />
                    <label htmlFor="searchText">Search</label>
                  </div>
                </div>
                <div className="col s7 m5 l4 xl3">
                  <div className={classes.buttonBox + ' right'}>
                    <button
                      type="submit"
                      className={classes.button + ' btn-large waves-effect waves-light'}
                    >
                      Search
                    </button>
                    <button
                      className={classes.button + ' btn-large waves-effect waves-light'}
                      type="button"
                      onClick={() => resetSearch(form.reset)}
                      disabled={submitting || pristine}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Search;
