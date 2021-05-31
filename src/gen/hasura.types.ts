// prettier-ignore
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "author_course" */
export type Author_Course = {
  __typename?: 'author_course';
  /** An object relationship */
  author: Authors;
  author_id: Scalars['uuid'];
  /** An object relationship */
  course: Courses;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "author_course" */
export type Author_Course_Aggregate = {
  __typename?: 'author_course_aggregate';
  aggregate?: Maybe<Author_Course_Aggregate_Fields>;
  nodes: Array<Author_Course>;
};

/** aggregate fields of "author_course" */
export type Author_Course_Aggregate_Fields = {
  __typename?: 'author_course_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Author_Course_Max_Fields>;
  min?: Maybe<Author_Course_Min_Fields>;
};


/** aggregate fields of "author_course" */
export type Author_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Author_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "author_course" */
export type Author_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Author_Course_Max_Order_By>;
  min?: Maybe<Author_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "author_course" */
export type Author_Course_Arr_Rel_Insert_Input = {
  data: Array<Author_Course_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Author_Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "author_course". All fields are combined with a logical 'AND'. */
export type Author_Course_Bool_Exp = {
  _and?: Maybe<Array<Author_Course_Bool_Exp>>;
  _not?: Maybe<Author_Course_Bool_Exp>;
  _or?: Maybe<Array<Author_Course_Bool_Exp>>;
  author?: Maybe<Authors_Bool_Exp>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "author_course" */
export enum Author_Course_Constraint {
  /** unique or primary key constraint */
  AuthorCoursePkey = 'author_course_pkey'
}

/** input type for inserting data into table "author_course" */
export type Author_Course_Insert_Input = {
  author?: Maybe<Authors_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['uuid']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Author_Course_Max_Fields = {
  __typename?: 'author_course_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "author_course" */
export type Author_Course_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Author_Course_Min_Fields = {
  __typename?: 'author_course_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "author_course" */
export type Author_Course_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "author_course" */
export type Author_Course_Mutation_Response = {
  __typename?: 'author_course_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Author_Course>;
};

/** on conflict condition type for table "author_course" */
export type Author_Course_On_Conflict = {
  constraint: Author_Course_Constraint;
  update_columns: Array<Author_Course_Update_Column>;
  where?: Maybe<Author_Course_Bool_Exp>;
};

/** Ordering options when selecting data from "author_course". */
export type Author_Course_Order_By = {
  author?: Maybe<Authors_Order_By>;
  author_id?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: author_course */
export type Author_Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "author_course" */
export enum Author_Course_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "author_course" */
export type Author_Course_Set_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "author_course" */
export enum Author_Course_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "authors" */
export type Authors = {
  __typename?: 'authors';
  /** An array relationship */
  courses: Array<Author_Course>;
  /** An aggregate relationship */
  courses_aggregate: Author_Course_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  portrait_url?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "authors" */
export type AuthorsCoursesArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


/** columns and relationships of "authors" */
export type AuthorsCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};

/** aggregated selection of "authors" */
export type Authors_Aggregate = {
  __typename?: 'authors_aggregate';
  aggregate?: Maybe<Authors_Aggregate_Fields>;
  nodes: Array<Authors>;
};

/** aggregate fields of "authors" */
export type Authors_Aggregate_Fields = {
  __typename?: 'authors_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Authors_Max_Fields>;
  min?: Maybe<Authors_Min_Fields>;
};


/** aggregate fields of "authors" */
export type Authors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Authors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "authors". All fields are combined with a logical 'AND'. */
export type Authors_Bool_Exp = {
  _and?: Maybe<Array<Authors_Bool_Exp>>;
  _not?: Maybe<Authors_Bool_Exp>;
  _or?: Maybe<Array<Authors_Bool_Exp>>;
  courses?: Maybe<Author_Course_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  portrait_url?: Maybe<String_Comparison_Exp>;
  qualifications?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "authors" */
export enum Authors_Constraint {
  /** unique or primary key constraint */
  AuthorsPkey = 'authors_pkey'
}

/** input type for inserting data into table "authors" */
export type Authors_Insert_Input = {
  courses?: Maybe<Author_Course_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  portrait_url?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Authors_Max_Fields = {
  __typename?: 'authors_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  portrait_url?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Authors_Min_Fields = {
  __typename?: 'authors_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  portrait_url?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "authors" */
export type Authors_Mutation_Response = {
  __typename?: 'authors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Authors>;
};

/** input type for inserting object relation for remote table "authors" */
export type Authors_Obj_Rel_Insert_Input = {
  data: Authors_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Authors_On_Conflict>;
};

/** on conflict condition type for table "authors" */
export type Authors_On_Conflict = {
  constraint: Authors_Constraint;
  update_columns: Array<Authors_Update_Column>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** Ordering options when selecting data from "authors". */
export type Authors_Order_By = {
  courses_aggregate?: Maybe<Author_Course_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portrait_url?: Maybe<Order_By>;
  qualifications?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: authors */
export type Authors_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "authors" */
export enum Authors_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PortraitUrl = 'portrait_url',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "authors" */
export type Authors_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  portrait_url?: Maybe<Scalars['String']>;
  qualifications?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "authors" */
export enum Authors_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PortraitUrl = 'portrait_url',
  /** column name */
  Qualifications = 'qualifications',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "categories" */
export type CategoriesCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  courses?: Maybe<Courses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  subcategories?: Maybe<Subcategories_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  subcategories?: Maybe<Subcategories_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  subcategories_aggregate?: Maybe<Subcategories_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/**
 * Track the modules started/completed by a user
 *
 *
 * columns and relationships of "course_module_user"
 */
export type Course_Module_User = {
  __typename?: 'course_module_user';
  course_module_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  module: Courses_Modules;
  progress: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "course_module_user" */
export type Course_Module_User_Aggregate = {
  __typename?: 'course_module_user_aggregate';
  aggregate?: Maybe<Course_Module_User_Aggregate_Fields>;
  nodes: Array<Course_Module_User>;
};

/** aggregate fields of "course_module_user" */
export type Course_Module_User_Aggregate_Fields = {
  __typename?: 'course_module_user_aggregate_fields';
  avg?: Maybe<Course_Module_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Module_User_Max_Fields>;
  min?: Maybe<Course_Module_User_Min_Fields>;
  stddev?: Maybe<Course_Module_User_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Module_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Module_User_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Module_User_Sum_Fields>;
  var_pop?: Maybe<Course_Module_User_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Module_User_Var_Samp_Fields>;
  variance?: Maybe<Course_Module_User_Variance_Fields>;
};


/** aggregate fields of "course_module_user" */
export type Course_Module_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Module_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_module_user" */
export type Course_Module_User_Aggregate_Order_By = {
  avg?: Maybe<Course_Module_User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Module_User_Max_Order_By>;
  min?: Maybe<Course_Module_User_Min_Order_By>;
  stddev?: Maybe<Course_Module_User_Stddev_Order_By>;
  stddev_pop?: Maybe<Course_Module_User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Course_Module_User_Stddev_Samp_Order_By>;
  sum?: Maybe<Course_Module_User_Sum_Order_By>;
  var_pop?: Maybe<Course_Module_User_Var_Pop_Order_By>;
  var_samp?: Maybe<Course_Module_User_Var_Samp_Order_By>;
  variance?: Maybe<Course_Module_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course_module_user" */
export type Course_Module_User_Arr_Rel_Insert_Input = {
  data: Array<Course_Module_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Course_Module_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Module_User_Avg_Fields = {
  __typename?: 'course_module_user_avg_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_module_user" */
export type Course_Module_User_Avg_Order_By = {
  progress?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_module_user". All fields are combined with a logical 'AND'. */
export type Course_Module_User_Bool_Exp = {
  _and?: Maybe<Array<Course_Module_User_Bool_Exp>>;
  _not?: Maybe<Course_Module_User_Bool_Exp>;
  _or?: Maybe<Array<Course_Module_User_Bool_Exp>>;
  course_module_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  module?: Maybe<Courses_Modules_Bool_Exp>;
  progress?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_module_user" */
export enum Course_Module_User_Constraint {
  /** unique or primary key constraint */
  CourseModuleUserPkey = 'course_module_user_pkey'
}

/** input type for incrementing numeric columns in table "course_module_user" */
export type Course_Module_User_Inc_Input = {
  progress?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "course_module_user" */
export type Course_Module_User_Insert_Input = {
  course_module_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  module?: Maybe<Courses_Modules_Obj_Rel_Insert_Input>;
  progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Course_Module_User_Max_Fields = {
  __typename?: 'course_module_user_max_fields';
  course_module_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "course_module_user" */
export type Course_Module_User_Max_Order_By = {
  course_module_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Module_User_Min_Fields = {
  __typename?: 'course_module_user_min_fields';
  course_module_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "course_module_user" */
export type Course_Module_User_Min_Order_By = {
  course_module_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "course_module_user" */
export type Course_Module_User_Mutation_Response = {
  __typename?: 'course_module_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course_Module_User>;
};

/** on conflict condition type for table "course_module_user" */
export type Course_Module_User_On_Conflict = {
  constraint: Course_Module_User_Constraint;
  update_columns: Array<Course_Module_User_Update_Column>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};

/** Ordering options when selecting data from "course_module_user". */
export type Course_Module_User_Order_By = {
  course_module_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  module?: Maybe<Courses_Modules_Order_By>;
  progress?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: course_module_user */
export type Course_Module_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course_module_user" */
export enum Course_Module_User_Select_Column {
  /** column name */
  CourseModuleId = 'course_module_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "course_module_user" */
export type Course_Module_User_Set_Input = {
  course_module_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Course_Module_User_Stddev_Fields = {
  __typename?: 'course_module_user_stddev_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_module_user" */
export type Course_Module_User_Stddev_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Module_User_Stddev_Pop_Fields = {
  __typename?: 'course_module_user_stddev_pop_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_module_user" */
export type Course_Module_User_Stddev_Pop_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Module_User_Stddev_Samp_Fields = {
  __typename?: 'course_module_user_stddev_samp_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_module_user" */
export type Course_Module_User_Stddev_Samp_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Module_User_Sum_Fields = {
  __typename?: 'course_module_user_sum_fields';
  progress?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_module_user" */
export type Course_Module_User_Sum_Order_By = {
  progress?: Maybe<Order_By>;
};

/** update columns of table "course_module_user" */
export enum Course_Module_User_Update_Column {
  /** column name */
  CourseModuleId = 'course_module_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Course_Module_User_Var_Pop_Fields = {
  __typename?: 'course_module_user_var_pop_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_module_user" */
export type Course_Module_User_Var_Pop_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Module_User_Var_Samp_Fields = {
  __typename?: 'course_module_user_var_samp_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_module_user" */
export type Course_Module_User_Var_Samp_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Module_User_Variance_Fields = {
  __typename?: 'course_module_user_variance_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_module_user" */
export type Course_Module_User_Variance_Order_By = {
  progress?: Maybe<Order_By>;
};

/** columns and relationships of "course_user" */
export type Course_User = {
  __typename?: 'course_user';
  completed: Scalars['Boolean'];
  /** An object relationship */
  course: Courses;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "course_user" */
export type Course_User_Aggregate = {
  __typename?: 'course_user_aggregate';
  aggregate?: Maybe<Course_User_Aggregate_Fields>;
  nodes: Array<Course_User>;
};

/** aggregate fields of "course_user" */
export type Course_User_Aggregate_Fields = {
  __typename?: 'course_user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Course_User_Max_Fields>;
  min?: Maybe<Course_User_Min_Fields>;
};


/** aggregate fields of "course_user" */
export type Course_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_user" */
export type Course_User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Course_User_Max_Order_By>;
  min?: Maybe<Course_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "course_user" */
export type Course_User_Arr_Rel_Insert_Input = {
  data: Array<Course_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Course_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "course_user". All fields are combined with a logical 'AND'. */
export type Course_User_Bool_Exp = {
  _and?: Maybe<Array<Course_User_Bool_Exp>>;
  _not?: Maybe<Course_User_Bool_Exp>;
  _or?: Maybe<Array<Course_User_Bool_Exp>>;
  completed?: Maybe<Boolean_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_user" */
export enum Course_User_Constraint {
  /** unique or primary key constraint */
  CourseUserPkey = 'course_user_pkey'
}

/** input type for inserting data into table "course_user" */
export type Course_User_Insert_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Course_User_Max_Fields = {
  __typename?: 'course_user_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "course_user" */
export type Course_User_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_User_Min_Fields = {
  __typename?: 'course_user_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "course_user" */
export type Course_User_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "course_user" */
export type Course_User_Mutation_Response = {
  __typename?: 'course_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course_User>;
};

/** on conflict condition type for table "course_user" */
export type Course_User_On_Conflict = {
  constraint: Course_User_Constraint;
  update_columns: Array<Course_User_Update_Column>;
  where?: Maybe<Course_User_Bool_Exp>;
};

/** Ordering options when selecting data from "course_user". */
export type Course_User_Order_By = {
  completed?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: course_user */
export type Course_User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course_user" */
export enum Course_User_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "course_user" */
export type Course_User_Set_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "course_user" */
export enum Course_User_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "courses" */
export type Courses = {
  __typename?: 'courses';
  /** An array relationship */
  authors: Array<Author_Course>;
  /** An aggregate relationship */
  authors_aggregate: Author_Course_Aggregate;
  banner_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty: Scalars['bpchar'];
  id: Scalars['uuid'];
  /** An array relationship */
  learning_outcomes: Array<Courses_Learning_Outcomes>;
  /** An aggregate relationship */
  learning_outcomes_aggregate: Courses_Learning_Outcomes_Aggregate;
  /** An array relationship */
  modules: Array<Courses_Modules>;
  /** An aggregate relationship */
  modules_aggregate: Courses_Modules_Aggregate;
  /** An object relationship */
  sector?: Maybe<Sectors>;
  sector_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  subcategory?: Maybe<Subcategories>;
  subcategory_id?: Maybe<Scalars['uuid']>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<Course_User>;
  /** An aggregate relationship */
  users_aggregate: Course_User_Aggregate;
};


/** columns and relationships of "courses" */
export type CoursesAuthorsArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesLearning_OutcomesArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesLearning_Outcomes_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesModulesArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesUsersArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  __typename?: 'courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'courses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type Courses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Max_Order_By>;
  min?: Maybe<Courses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "courses" */
export type Courses_Arr_Rel_Insert_Input = {
  data: Array<Courses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: Maybe<Array<Courses_Bool_Exp>>;
  _not?: Maybe<Courses_Bool_Exp>;
  _or?: Maybe<Array<Courses_Bool_Exp>>;
  authors?: Maybe<Author_Course_Bool_Exp>;
  banner_url?: Maybe<String_Comparison_Exp>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  difficulty?: Maybe<Bpchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  learning_outcomes?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
  modules?: Maybe<Courses_Modules_Bool_Exp>;
  sector?: Maybe<Sectors_Bool_Exp>;
  sector_id?: Maybe<Uuid_Comparison_Exp>;
  subcategory?: Maybe<Subcategories_Bool_Exp>;
  subcategory_id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Course_User_Bool_Exp>;
};

/** unique or primary key constraints on table "courses" */
export enum Courses_Constraint {
  /** unique or primary key constraint */
  CoursesPkey = 'courses_pkey'
}

/** input type for inserting data into table "courses" */
export type Courses_Insert_Input = {
  authors?: Maybe<Author_Course_Arr_Rel_Insert_Input>;
  banner_url?: Maybe<Scalars['String']>;
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  learning_outcomes?: Maybe<Courses_Learning_Outcomes_Arr_Rel_Insert_Input>;
  modules?: Maybe<Courses_Modules_Arr_Rel_Insert_Input>;
  sector?: Maybe<Sectors_Obj_Rel_Insert_Input>;
  sector_id?: Maybe<Scalars['uuid']>;
  subcategory?: Maybe<Subcategories_Obj_Rel_Insert_Input>;
  subcategory_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Course_User_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "courses_learning_outcomes" */
export type Courses_Learning_Outcomes = {
  __typename?: 'courses_learning_outcomes';
  /** An object relationship */
  course: Courses;
  course_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  icon_url?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Aggregate = {
  __typename?: 'courses_learning_outcomes_aggregate';
  aggregate?: Maybe<Courses_Learning_Outcomes_Aggregate_Fields>;
  nodes: Array<Courses_Learning_Outcomes>;
};

/** aggregate fields of "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Aggregate_Fields = {
  __typename?: 'courses_learning_outcomes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Courses_Learning_Outcomes_Max_Fields>;
  min?: Maybe<Courses_Learning_Outcomes_Min_Fields>;
};


/** aggregate fields of "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Learning_Outcomes_Max_Order_By>;
  min?: Maybe<Courses_Learning_Outcomes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Arr_Rel_Insert_Input = {
  data: Array<Courses_Learning_Outcomes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_Learning_Outcomes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "courses_learning_outcomes". All fields are combined with a logical 'AND'. */
export type Courses_Learning_Outcomes_Bool_Exp = {
  _and?: Maybe<Array<Courses_Learning_Outcomes_Bool_Exp>>;
  _not?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
  _or?: Maybe<Array<Courses_Learning_Outcomes_Bool_Exp>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  icon_url?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses_learning_outcomes" */
export enum Courses_Learning_Outcomes_Constraint {
  /** unique or primary key constraint */
  CoursesLearningOutcomesPkey = 'courses_learning_outcomes_pkey'
}

/** input type for inserting data into table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Courses_Learning_Outcomes_Max_Fields = {
  __typename?: 'courses_learning_outcomes_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  icon_url?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Learning_Outcomes_Min_Fields = {
  __typename?: 'courses_learning_outcomes_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  icon_url?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Mutation_Response = {
  __typename?: 'courses_learning_outcomes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Courses_Learning_Outcomes>;
};

/** on conflict condition type for table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_On_Conflict = {
  constraint: Courses_Learning_Outcomes_Constraint;
  update_columns: Array<Courses_Learning_Outcomes_Update_Column>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};

/** Ordering options when selecting data from "courses_learning_outcomes". */
export type Courses_Learning_Outcomes_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  icon_url?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: courses_learning_outcomes */
export type Courses_Learning_Outcomes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "courses_learning_outcomes" */
export enum Courses_Learning_Outcomes_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "courses_learning_outcomes" */
export type Courses_Learning_Outcomes_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  icon_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "courses_learning_outcomes" */
export enum Courses_Learning_Outcomes_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  IconUrl = 'icon_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'courses_max_fields';
  banner_url?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  sector_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "courses" */
export type Courses_Max_Order_By = {
  banner_url?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sector_id?: Maybe<Order_By>;
  subcategory_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'courses_min_fields';
  banner_url?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  sector_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "courses" */
export type Courses_Min_Order_By = {
  banner_url?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sector_id?: Maybe<Order_By>;
  subcategory_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "courses_modules" */
export type Courses_Modules = {
  __typename?: 'courses_modules';
  /** An object relationship */
  course: Courses;
  course_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  length: Scalars['Int'];
  thumbnail_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<Course_Module_User>;
  /** An aggregate relationship */
  users_aggregate: Course_Module_User_Aggregate;
  video_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "courses_modules" */
export type Courses_ModulesUsersArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


/** columns and relationships of "courses_modules" */
export type Courses_ModulesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};

/** aggregated selection of "courses_modules" */
export type Courses_Modules_Aggregate = {
  __typename?: 'courses_modules_aggregate';
  aggregate?: Maybe<Courses_Modules_Aggregate_Fields>;
  nodes: Array<Courses_Modules>;
};

/** aggregate fields of "courses_modules" */
export type Courses_Modules_Aggregate_Fields = {
  __typename?: 'courses_modules_aggregate_fields';
  avg?: Maybe<Courses_Modules_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Courses_Modules_Max_Fields>;
  min?: Maybe<Courses_Modules_Min_Fields>;
  stddev?: Maybe<Courses_Modules_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Modules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Modules_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Modules_Sum_Fields>;
  var_pop?: Maybe<Courses_Modules_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Modules_Var_Samp_Fields>;
  variance?: Maybe<Courses_Modules_Variance_Fields>;
};


/** aggregate fields of "courses_modules" */
export type Courses_Modules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Modules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses_modules" */
export type Courses_Modules_Aggregate_Order_By = {
  avg?: Maybe<Courses_Modules_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Modules_Max_Order_By>;
  min?: Maybe<Courses_Modules_Min_Order_By>;
  stddev?: Maybe<Courses_Modules_Stddev_Order_By>;
  stddev_pop?: Maybe<Courses_Modules_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Courses_Modules_Stddev_Samp_Order_By>;
  sum?: Maybe<Courses_Modules_Sum_Order_By>;
  var_pop?: Maybe<Courses_Modules_Var_Pop_Order_By>;
  var_samp?: Maybe<Courses_Modules_Var_Samp_Order_By>;
  variance?: Maybe<Courses_Modules_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courses_modules" */
export type Courses_Modules_Arr_Rel_Insert_Input = {
  data: Array<Courses_Modules_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_Modules_On_Conflict>;
};

/** aggregate avg on columns */
export type Courses_Modules_Avg_Fields = {
  __typename?: 'courses_modules_avg_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses_modules" */
export type Courses_Modules_Avg_Order_By = {
  length?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courses_modules". All fields are combined with a logical 'AND'. */
export type Courses_Modules_Bool_Exp = {
  _and?: Maybe<Array<Courses_Modules_Bool_Exp>>;
  _not?: Maybe<Courses_Modules_Bool_Exp>;
  _or?: Maybe<Array<Courses_Modules_Bool_Exp>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  length?: Maybe<Int_Comparison_Exp>;
  thumbnail_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Course_Module_User_Bool_Exp>;
  video_url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses_modules" */
export enum Courses_Modules_Constraint {
  /** unique or primary key constraint */
  CoursesModulesPkey = 'courses_modules_pkey'
}

/** input type for incrementing numeric columns in table "courses_modules" */
export type Courses_Modules_Inc_Input = {
  length?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "courses_modules" */
export type Courses_Modules_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  length?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Course_Module_User_Arr_Rel_Insert_Input>;
  video_url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Courses_Modules_Max_Fields = {
  __typename?: 'courses_modules_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  length?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "courses_modules" */
export type Courses_Modules_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Modules_Min_Fields = {
  __typename?: 'courses_modules_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  length?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "courses_modules" */
export type Courses_Modules_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses_modules" */
export type Courses_Modules_Mutation_Response = {
  __typename?: 'courses_modules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Courses_Modules>;
};

/** input type for inserting object relation for remote table "courses_modules" */
export type Courses_Modules_Obj_Rel_Insert_Input = {
  data: Courses_Modules_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_Modules_On_Conflict>;
};

/** on conflict condition type for table "courses_modules" */
export type Courses_Modules_On_Conflict = {
  constraint: Courses_Modules_Constraint;
  update_columns: Array<Courses_Modules_Update_Column>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};

/** Ordering options when selecting data from "courses_modules". */
export type Courses_Modules_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Course_Module_User_Aggregate_Order_By>;
  video_url?: Maybe<Order_By>;
};

/** primary key columns input for table: courses_modules */
export type Courses_Modules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "courses_modules" */
export enum Courses_Modules_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url'
}

/** input type for updating data in table "courses_modules" */
export type Courses_Modules_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  length?: Maybe<Scalars['Int']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Courses_Modules_Stddev_Fields = {
  __typename?: 'courses_modules_stddev_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses_modules" */
export type Courses_Modules_Stddev_Order_By = {
  length?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Modules_Stddev_Pop_Fields = {
  __typename?: 'courses_modules_stddev_pop_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses_modules" */
export type Courses_Modules_Stddev_Pop_Order_By = {
  length?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Modules_Stddev_Samp_Fields = {
  __typename?: 'courses_modules_stddev_samp_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses_modules" */
export type Courses_Modules_Stddev_Samp_Order_By = {
  length?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Modules_Sum_Fields = {
  __typename?: 'courses_modules_sum_fields';
  length?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "courses_modules" */
export type Courses_Modules_Sum_Order_By = {
  length?: Maybe<Order_By>;
};

/** update columns of table "courses_modules" */
export enum Courses_Modules_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url'
}

/** aggregate var_pop on columns */
export type Courses_Modules_Var_Pop_Fields = {
  __typename?: 'courses_modules_var_pop_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses_modules" */
export type Courses_Modules_Var_Pop_Order_By = {
  length?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Modules_Var_Samp_Fields = {
  __typename?: 'courses_modules_var_samp_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses_modules" */
export type Courses_Modules_Var_Samp_Order_By = {
  length?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Modules_Variance_Fields = {
  __typename?: 'courses_modules_variance_fields';
  length?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses_modules" */
export type Courses_Modules_Variance_Order_By = {
  length?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses" */
export type Courses_Mutation_Response = {
  __typename?: 'courses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Courses>;
};

/** input type for inserting object relation for remote table "courses" */
export type Courses_Obj_Rel_Insert_Input = {
  data: Courses_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** on conflict condition type for table "courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns: Array<Courses_Update_Column>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** Ordering options when selecting data from "courses". */
export type Courses_Order_By = {
  authors_aggregate?: Maybe<Author_Course_Aggregate_Order_By>;
  banner_url?: Maybe<Order_By>;
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  learning_outcomes_aggregate?: Maybe<Courses_Learning_Outcomes_Aggregate_Order_By>;
  modules_aggregate?: Maybe<Courses_Modules_Aggregate_Order_By>;
  sector?: Maybe<Sectors_Order_By>;
  sector_id?: Maybe<Order_By>;
  subcategory?: Maybe<Subcategories_Order_By>;
  subcategory_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Course_User_Aggregate_Order_By>;
};

/** primary key columns input for table: courses */
export type Courses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "courses" */
export enum Courses_Select_Column {
  /** column name */
  BannerUrl = 'banner_url',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  SectorId = 'sector_id',
  /** column name */
  SubcategoryId = 'subcategory_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "courses" */
export type Courses_Set_Input = {
  banner_url?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  sector_id?: Maybe<Scalars['uuid']>;
  subcategory_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "courses" */
export enum Courses_Update_Column {
  /** column name */
  BannerUrl = 'banner_url',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  SectorId = 'sector_id',
  /** column name */
  SubcategoryId = 'subcategory_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "author_course" */
  delete_author_course?: Maybe<Author_Course_Mutation_Response>;
  /** delete single row from the table: "author_course" */
  delete_author_course_by_pk?: Maybe<Author_Course>;
  /** delete data from the table: "authors" */
  delete_authors?: Maybe<Authors_Mutation_Response>;
  /** delete single row from the table: "authors" */
  delete_authors_by_pk?: Maybe<Authors>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "course_module_user" */
  delete_course_module_user?: Maybe<Course_Module_User_Mutation_Response>;
  /** delete single row from the table: "course_module_user" */
  delete_course_module_user_by_pk?: Maybe<Course_Module_User>;
  /** delete data from the table: "course_user" */
  delete_course_user?: Maybe<Course_User_Mutation_Response>;
  /** delete single row from the table: "course_user" */
  delete_course_user_by_pk?: Maybe<Course_User>;
  /** delete data from the table: "courses" */
  delete_courses?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "courses" */
  delete_courses_by_pk?: Maybe<Courses>;
  /** delete data from the table: "courses_learning_outcomes" */
  delete_courses_learning_outcomes?: Maybe<Courses_Learning_Outcomes_Mutation_Response>;
  /** delete single row from the table: "courses_learning_outcomes" */
  delete_courses_learning_outcomes_by_pk?: Maybe<Courses_Learning_Outcomes>;
  /** delete data from the table: "courses_modules" */
  delete_courses_modules?: Maybe<Courses_Modules_Mutation_Response>;
  /** delete single row from the table: "courses_modules" */
  delete_courses_modules_by_pk?: Maybe<Courses_Modules>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "sectors" */
  delete_sectors?: Maybe<Sectors_Mutation_Response>;
  /** delete single row from the table: "sectors" */
  delete_sectors_by_pk?: Maybe<Sectors>;
  /** delete data from the table: "subcategories" */
  delete_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** delete single row from the table: "subcategories" */
  delete_subcategories_by_pk?: Maybe<Subcategories>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "author_course" */
  insert_author_course?: Maybe<Author_Course_Mutation_Response>;
  /** insert a single row into the table: "author_course" */
  insert_author_course_one?: Maybe<Author_Course>;
  /** insert data into the table: "authors" */
  insert_authors?: Maybe<Authors_Mutation_Response>;
  /** insert a single row into the table: "authors" */
  insert_authors_one?: Maybe<Authors>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "course_module_user" */
  insert_course_module_user?: Maybe<Course_Module_User_Mutation_Response>;
  /** insert a single row into the table: "course_module_user" */
  insert_course_module_user_one?: Maybe<Course_Module_User>;
  /** insert data into the table: "course_user" */
  insert_course_user?: Maybe<Course_User_Mutation_Response>;
  /** insert a single row into the table: "course_user" */
  insert_course_user_one?: Maybe<Course_User>;
  /** insert data into the table: "courses" */
  insert_courses?: Maybe<Courses_Mutation_Response>;
  /** insert data into the table: "courses_learning_outcomes" */
  insert_courses_learning_outcomes?: Maybe<Courses_Learning_Outcomes_Mutation_Response>;
  /** insert a single row into the table: "courses_learning_outcomes" */
  insert_courses_learning_outcomes_one?: Maybe<Courses_Learning_Outcomes>;
  /** insert data into the table: "courses_modules" */
  insert_courses_modules?: Maybe<Courses_Modules_Mutation_Response>;
  /** insert a single row into the table: "courses_modules" */
  insert_courses_modules_one?: Maybe<Courses_Modules>;
  /** insert a single row into the table: "courses" */
  insert_courses_one?: Maybe<Courses>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "sectors" */
  insert_sectors?: Maybe<Sectors_Mutation_Response>;
  /** insert a single row into the table: "sectors" */
  insert_sectors_one?: Maybe<Sectors>;
  /** insert data into the table: "subcategories" */
  insert_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** insert a single row into the table: "subcategories" */
  insert_subcategories_one?: Maybe<Subcategories>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "author_course" */
  update_author_course?: Maybe<Author_Course_Mutation_Response>;
  /** update single row of the table: "author_course" */
  update_author_course_by_pk?: Maybe<Author_Course>;
  /** update data of the table: "authors" */
  update_authors?: Maybe<Authors_Mutation_Response>;
  /** update single row of the table: "authors" */
  update_authors_by_pk?: Maybe<Authors>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "course_module_user" */
  update_course_module_user?: Maybe<Course_Module_User_Mutation_Response>;
  /** update single row of the table: "course_module_user" */
  update_course_module_user_by_pk?: Maybe<Course_Module_User>;
  /** update data of the table: "course_user" */
  update_course_user?: Maybe<Course_User_Mutation_Response>;
  /** update single row of the table: "course_user" */
  update_course_user_by_pk?: Maybe<Course_User>;
  /** update data of the table: "courses" */
  update_courses?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "courses" */
  update_courses_by_pk?: Maybe<Courses>;
  /** update data of the table: "courses_learning_outcomes" */
  update_courses_learning_outcomes?: Maybe<Courses_Learning_Outcomes_Mutation_Response>;
  /** update single row of the table: "courses_learning_outcomes" */
  update_courses_learning_outcomes_by_pk?: Maybe<Courses_Learning_Outcomes>;
  /** update data of the table: "courses_modules" */
  update_courses_modules?: Maybe<Courses_Modules_Mutation_Response>;
  /** update single row of the table: "courses_modules" */
  update_courses_modules_by_pk?: Maybe<Courses_Modules>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update data of the table: "sectors" */
  update_sectors?: Maybe<Sectors_Mutation_Response>;
  /** update single row of the table: "sectors" */
  update_sectors_by_pk?: Maybe<Sectors>;
  /** update data of the table: "subcategories" */
  update_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** update single row of the table: "subcategories" */
  update_subcategories_by_pk?: Maybe<Subcategories>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Author_CourseArgs = {
  where: Author_Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_Course_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AuthorsArgs = {
  where: Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Authors_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Course_Module_UserArgs = {
  where: Course_Module_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_Module_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Course_UserArgs = {
  where: Course_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CoursesArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Courses_Learning_OutcomesArgs = {
  where: Courses_Learning_Outcomes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_Learning_Outcomes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Courses_ModulesArgs = {
  where: Courses_Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_Modules_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SectorsArgs = {
  where: Sectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sectors_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SubcategoriesArgs = {
  where: Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Author_CourseArgs = {
  objects: Array<Author_Course_Insert_Input>;
  on_conflict?: Maybe<Author_Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_Course_OneArgs = {
  object: Author_Course_Insert_Input;
  on_conflict?: Maybe<Author_Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AuthorsArgs = {
  objects: Array<Authors_Insert_Input>;
  on_conflict?: Maybe<Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Authors_OneArgs = {
  object: Authors_Insert_Input;
  on_conflict?: Maybe<Authors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Module_UserArgs = {
  objects: Array<Course_Module_User_Insert_Input>;
  on_conflict?: Maybe<Course_Module_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Module_User_OneArgs = {
  object: Course_Module_User_Insert_Input;
  on_conflict?: Maybe<Course_Module_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_UserArgs = {
  objects: Array<Course_User_Insert_Input>;
  on_conflict?: Maybe<Course_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_User_OneArgs = {
  object: Course_User_Insert_Input;
  on_conflict?: Maybe<Course_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoursesArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_Learning_OutcomesArgs = {
  objects: Array<Courses_Learning_Outcomes_Insert_Input>;
  on_conflict?: Maybe<Courses_Learning_Outcomes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_Learning_Outcomes_OneArgs = {
  object: Courses_Learning_Outcomes_Insert_Input;
  on_conflict?: Maybe<Courses_Learning_Outcomes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_ModulesArgs = {
  objects: Array<Courses_Modules_Insert_Input>;
  on_conflict?: Maybe<Courses_Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_Modules_OneArgs = {
  object: Courses_Modules_Insert_Input;
  on_conflict?: Maybe<Courses_Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_OneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SectorsArgs = {
  objects: Array<Sectors_Insert_Input>;
  on_conflict?: Maybe<Sectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sectors_OneArgs = {
  object: Sectors_Insert_Input;
  on_conflict?: Maybe<Sectors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubcategoriesArgs = {
  objects: Array<Subcategories_Insert_Input>;
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subcategories_OneArgs = {
  object: Subcategories_Insert_Input;
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Author_CourseArgs = {
  _set?: Maybe<Author_Course_Set_Input>;
  where: Author_Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_Course_By_PkArgs = {
  _set?: Maybe<Author_Course_Set_Input>;
  pk_columns: Author_Course_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorsArgs = {
  _set?: Maybe<Authors_Set_Input>;
  where: Authors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Authors_By_PkArgs = {
  _set?: Maybe<Authors_Set_Input>;
  pk_columns: Authors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Module_UserArgs = {
  _inc?: Maybe<Course_Module_User_Inc_Input>;
  _set?: Maybe<Course_Module_User_Set_Input>;
  where: Course_Module_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Module_User_By_PkArgs = {
  _inc?: Maybe<Course_Module_User_Inc_Input>;
  _set?: Maybe<Course_Module_User_Set_Input>;
  pk_columns: Course_Module_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_UserArgs = {
  _set?: Maybe<Course_User_Set_Input>;
  where: Course_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_User_By_PkArgs = {
  _set?: Maybe<Course_User_Set_Input>;
  pk_columns: Course_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CoursesArgs = {
  _set?: Maybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_By_PkArgs = {
  _set?: Maybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_Learning_OutcomesArgs = {
  _set?: Maybe<Courses_Learning_Outcomes_Set_Input>;
  where: Courses_Learning_Outcomes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_Learning_Outcomes_By_PkArgs = {
  _set?: Maybe<Courses_Learning_Outcomes_Set_Input>;
  pk_columns: Courses_Learning_Outcomes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_ModulesArgs = {
  _inc?: Maybe<Courses_Modules_Inc_Input>;
  _set?: Maybe<Courses_Modules_Set_Input>;
  where: Courses_Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_Modules_By_PkArgs = {
  _inc?: Maybe<Courses_Modules_Inc_Input>;
  _set?: Maybe<Courses_Modules_Set_Input>;
  pk_columns: Courses_Modules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _set?: Maybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SectorsArgs = {
  _set?: Maybe<Sectors_Set_Input>;
  where: Sectors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sectors_By_PkArgs = {
  _set?: Maybe<Sectors_Set_Input>;
  pk_columns: Sectors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubcategoriesArgs = {
  _set?: Maybe<Subcategories_Set_Input>;
  where: Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subcategories_By_PkArgs = {
  _set?: Maybe<Subcategories_Set_Input>;
  pk_columns: Subcategories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "organizations" */
export type OrganizationsUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organizations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: Maybe<Array<Organizations_Bool_Exp>>;
  _not?: Maybe<Organizations_Bool_Exp>;
  _or?: Maybe<Array<Organizations_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** on conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns: Array<Organizations_Update_Column>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "author_course" */
  author_course: Array<Author_Course>;
  /** fetch aggregated fields from the table: "author_course" */
  author_course_aggregate: Author_Course_Aggregate;
  /** fetch data from the table: "author_course" using primary key columns */
  author_course_by_pk?: Maybe<Author_Course>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "course_module_user" */
  course_module_user: Array<Course_Module_User>;
  /** fetch aggregated fields from the table: "course_module_user" */
  course_module_user_aggregate: Course_Module_User_Aggregate;
  /** fetch data from the table: "course_module_user" using primary key columns */
  course_module_user_by_pk?: Maybe<Course_Module_User>;
  /** fetch data from the table: "course_user" */
  course_user: Array<Course_User>;
  /** fetch aggregated fields from the table: "course_user" */
  course_user_aggregate: Course_User_Aggregate;
  /** fetch data from the table: "course_user" using primary key columns */
  course_user_by_pk?: Maybe<Course_User>;
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "courses_learning_outcomes" */
  courses_learning_outcomes: Array<Courses_Learning_Outcomes>;
  /** fetch aggregated fields from the table: "courses_learning_outcomes" */
  courses_learning_outcomes_aggregate: Courses_Learning_Outcomes_Aggregate;
  /** fetch data from the table: "courses_learning_outcomes" using primary key columns */
  courses_learning_outcomes_by_pk?: Maybe<Courses_Learning_Outcomes>;
  /** fetch data from the table: "courses_modules" */
  courses_modules: Array<Courses_Modules>;
  /** fetch aggregated fields from the table: "courses_modules" */
  courses_modules_aggregate: Courses_Modules_Aggregate;
  /** fetch data from the table: "courses_modules" using primary key columns */
  courses_modules_by_pk?: Maybe<Courses_Modules>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "sectors" */
  sectors: Array<Sectors>;
  /** fetch aggregated fields from the table: "sectors" */
  sectors_aggregate: Sectors_Aggregate;
  /** fetch data from the table: "sectors" using primary key columns */
  sectors_by_pk?: Maybe<Sectors>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuthor_CourseArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


export type Query_RootAuthor_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


export type Query_RootAuthor_Course_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};


export type Query_RootAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};


export type Query_RootAuthors_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourse_Module_UserArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


export type Query_RootCourse_Module_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


export type Query_RootCourse_Module_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourse_UserArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


export type Query_RootCourse_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


export type Query_RootCourse_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Query_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourses_Learning_OutcomesArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


export type Query_RootCourses_Learning_Outcomes_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


export type Query_RootCourses_Learning_Outcomes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourses_ModulesArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


export type Query_RootCourses_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


export type Query_RootCourses_Modules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSectorsArgs = {
  distinct_on?: Maybe<Array<Sectors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sectors_Order_By>>;
  where?: Maybe<Sectors_Bool_Exp>;
};


export type Query_RootSectors_AggregateArgs = {
  distinct_on?: Maybe<Array<Sectors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sectors_Order_By>>;
  where?: Maybe<Sectors_Bool_Exp>;
};


export type Query_RootSectors_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Query_RootSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Query_RootSubcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "sectors" */
export type Sectors = {
  __typename?: 'sectors';
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "sectors" */
export type SectorsCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "sectors" */
export type SectorsCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** aggregated selection of "sectors" */
export type Sectors_Aggregate = {
  __typename?: 'sectors_aggregate';
  aggregate?: Maybe<Sectors_Aggregate_Fields>;
  nodes: Array<Sectors>;
};

/** aggregate fields of "sectors" */
export type Sectors_Aggregate_Fields = {
  __typename?: 'sectors_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sectors_Max_Fields>;
  min?: Maybe<Sectors_Min_Fields>;
};


/** aggregate fields of "sectors" */
export type Sectors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sectors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "sectors". All fields are combined with a logical 'AND'. */
export type Sectors_Bool_Exp = {
  _and?: Maybe<Array<Sectors_Bool_Exp>>;
  _not?: Maybe<Sectors_Bool_Exp>;
  _or?: Maybe<Array<Sectors_Bool_Exp>>;
  courses?: Maybe<Courses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sectors" */
export enum Sectors_Constraint {
  /** unique or primary key constraint */
  SectorsPkey = 'sectors_pkey'
}

/** input type for inserting data into table "sectors" */
export type Sectors_Insert_Input = {
  courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sectors_Max_Fields = {
  __typename?: 'sectors_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Sectors_Min_Fields = {
  __typename?: 'sectors_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "sectors" */
export type Sectors_Mutation_Response = {
  __typename?: 'sectors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sectors>;
};

/** input type for inserting object relation for remote table "sectors" */
export type Sectors_Obj_Rel_Insert_Input = {
  data: Sectors_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Sectors_On_Conflict>;
};

/** on conflict condition type for table "sectors" */
export type Sectors_On_Conflict = {
  constraint: Sectors_Constraint;
  update_columns: Array<Sectors_Update_Column>;
  where?: Maybe<Sectors_Bool_Exp>;
};

/** Ordering options when selecting data from "sectors". */
export type Sectors_Order_By = {
  courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sectors */
export type Sectors_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sectors" */
export enum Sectors_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "sectors" */
export type Sectors_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "sectors" */
export enum Sectors_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "subcategories" */
export type Subcategories = {
  __typename?: 'subcategories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "subcategories" */
export type SubcategoriesCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "subcategories" */
export type SubcategoriesCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** aggregated selection of "subcategories" */
export type Subcategories_Aggregate = {
  __typename?: 'subcategories_aggregate';
  aggregate?: Maybe<Subcategories_Aggregate_Fields>;
  nodes: Array<Subcategories>;
};

/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_Fields = {
  __typename?: 'subcategories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Subcategories_Max_Fields>;
  min?: Maybe<Subcategories_Min_Fields>;
};


/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Subcategories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "subcategories" */
export type Subcategories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Subcategories_Max_Order_By>;
  min?: Maybe<Subcategories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "subcategories" */
export type Subcategories_Arr_Rel_Insert_Input = {
  data: Array<Subcategories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "subcategories". All fields are combined with a logical 'AND'. */
export type Subcategories_Bool_Exp = {
  _and?: Maybe<Array<Subcategories_Bool_Exp>>;
  _not?: Maybe<Subcategories_Bool_Exp>;
  _or?: Maybe<Array<Subcategories_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  courses?: Maybe<Courses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "subcategories" */
export enum Subcategories_Constraint {
  /** unique or primary key constraint */
  SubcategoriesPkey = 'subcategories_pkey'
}

/** input type for inserting data into table "subcategories" */
export type Subcategories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['uuid']>;
  courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Subcategories_Max_Fields = {
  __typename?: 'subcategories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "subcategories" */
export type Subcategories_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Subcategories_Min_Fields = {
  __typename?: 'subcategories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "subcategories" */
export type Subcategories_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "subcategories" */
export type Subcategories_Mutation_Response = {
  __typename?: 'subcategories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subcategories>;
};

/** input type for inserting object relation for remote table "subcategories" */
export type Subcategories_Obj_Rel_Insert_Input = {
  data: Subcategories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Subcategories_On_Conflict>;
};

/** on conflict condition type for table "subcategories" */
export type Subcategories_On_Conflict = {
  constraint: Subcategories_Constraint;
  update_columns: Array<Subcategories_Update_Column>;
  where?: Maybe<Subcategories_Bool_Exp>;
};

/** Ordering options when selecting data from "subcategories". */
export type Subcategories_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: subcategories */
export type Subcategories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "subcategories" */
export enum Subcategories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subcategories" */
export type Subcategories_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "subcategories" */
export enum Subcategories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "author_course" */
  author_course: Array<Author_Course>;
  /** fetch aggregated fields from the table: "author_course" */
  author_course_aggregate: Author_Course_Aggregate;
  /** fetch data from the table: "author_course" using primary key columns */
  author_course_by_pk?: Maybe<Author_Course>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "course_module_user" */
  course_module_user: Array<Course_Module_User>;
  /** fetch aggregated fields from the table: "course_module_user" */
  course_module_user_aggregate: Course_Module_User_Aggregate;
  /** fetch data from the table: "course_module_user" using primary key columns */
  course_module_user_by_pk?: Maybe<Course_Module_User>;
  /** fetch data from the table: "course_user" */
  course_user: Array<Course_User>;
  /** fetch aggregated fields from the table: "course_user" */
  course_user_aggregate: Course_User_Aggregate;
  /** fetch data from the table: "course_user" using primary key columns */
  course_user_by_pk?: Maybe<Course_User>;
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregate relationship */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "courses_learning_outcomes" */
  courses_learning_outcomes: Array<Courses_Learning_Outcomes>;
  /** fetch aggregated fields from the table: "courses_learning_outcomes" */
  courses_learning_outcomes_aggregate: Courses_Learning_Outcomes_Aggregate;
  /** fetch data from the table: "courses_learning_outcomes" using primary key columns */
  courses_learning_outcomes_by_pk?: Maybe<Courses_Learning_Outcomes>;
  /** fetch data from the table: "courses_modules" */
  courses_modules: Array<Courses_Modules>;
  /** fetch aggregated fields from the table: "courses_modules" */
  courses_modules_aggregate: Courses_Modules_Aggregate;
  /** fetch data from the table: "courses_modules" using primary key columns */
  courses_modules_by_pk?: Maybe<Courses_Modules>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "sectors" */
  sectors: Array<Sectors>;
  /** fetch aggregated fields from the table: "sectors" */
  sectors_aggregate: Sectors_Aggregate;
  /** fetch data from the table: "sectors" using primary key columns */
  sectors_by_pk?: Maybe<Sectors>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuthor_CourseArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


export type Subscription_RootAuthor_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Author_Course_Order_By>>;
  where?: Maybe<Author_Course_Bool_Exp>;
};


export type Subscription_RootAuthor_Course_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};


export type Subscription_RootAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};


export type Subscription_RootAuthors_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourse_Module_UserArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


export type Subscription_RootCourse_Module_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


export type Subscription_RootCourse_Module_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourse_UserArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


export type Subscription_RootCourse_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


export type Subscription_RootCourse_User_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


export type Subscription_RootCourses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourses_Learning_OutcomesArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


export type Subscription_RootCourses_Learning_Outcomes_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Learning_Outcomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Learning_Outcomes_Order_By>>;
  where?: Maybe<Courses_Learning_Outcomes_Bool_Exp>;
};


export type Subscription_RootCourses_Learning_Outcomes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourses_ModulesArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


export type Subscription_RootCourses_Modules_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Modules_Order_By>>;
  where?: Maybe<Courses_Modules_Bool_Exp>;
};


export type Subscription_RootCourses_Modules_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSectorsArgs = {
  distinct_on?: Maybe<Array<Sectors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sectors_Order_By>>;
  where?: Maybe<Sectors_Bool_Exp>;
};


export type Subscription_RootSectors_AggregateArgs = {
  distinct_on?: Maybe<Array<Sectors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sectors_Order_By>>;
  where?: Maybe<Sectors_Bool_Exp>;
};


export type Subscription_RootSectors_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSubcategoriesArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Subscription_RootSubcategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Subcategories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Subcategories_Order_By>>;
  where?: Maybe<Subcategories_Bool_Exp>;
};


export type Subscription_RootSubcategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  courses: Array<Course_User>;
  /** An aggregate relationship */
  courses_aggregate: Course_User_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['bpchar'];
  id: Scalars['uuid'];
  /** An array relationship */
  modules: Array<Course_Module_User>;
  /** An aggregate relationship */
  modules_aggregate: Course_Module_User_Aggregate;
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organization_id?: Maybe<Scalars['uuid']>;
  password: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "users" */
export type UsersCoursesArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_User_Order_By>>;
  where?: Maybe<Course_User_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersModulesArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Module_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Module_User_Order_By>>;
  where?: Maybe<Course_Module_User_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  courses?: Maybe<Course_User_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<Bpchar_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  modules?: Maybe<Course_Module_User_Bool_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  courses?: Maybe<Course_User_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  modules?: Maybe<Course_Module_User_Arr_Rel_Insert_Input>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  organization_id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  organization_id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  courses_aggregate?: Maybe<Course_User_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  modules_aggregate?: Maybe<Course_Module_User_Aggregate_Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['uuid']>;
  organization_id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetUsersByEmailQueryVariables = Exact<{
  email?: Maybe<Scalars['bpchar']>;
}>;


export type GetUsersByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'password' | 'id'>
  )> }
);

export type AddUserMutationVariables = Exact<{
  email?: Maybe<Scalars['bpchar']>;
  password: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'email'>
  )> }
);


export const GetUsersByEmailDocument: DocumentNode<GetUsersByEmailQuery, GetUsersByEmailQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bpchar"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]};
export const AddUserDocument: DocumentNode<AddUserMutation, AddUserMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bpchar"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]};