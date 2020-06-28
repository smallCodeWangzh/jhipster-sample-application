import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './article.reducer';
import { IArticle } from 'app/shared/model/article.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IArticleProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Article = (props: IArticleProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { articleList, match, loading } = props;
  return (
    <div>
      <h2 id="article-heading">
        <Translate contentKey="jhipsterSampleApplicationApp.article.home.title">Articles</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterSampleApplicationApp.article.home.createLabel">Create new Article</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {articleList && articleList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.author">Author</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.clickTimees">Click Timees</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.content">Content</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.publishDate">Publish Date</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.title">Title</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterSampleApplicationApp.article.category">Category</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {articleList.map((article, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${article.id}`} color="link" size="sm">
                      {article.id}
                    </Button>
                  </td>
                  <td>{article.author}</td>
                  <td>{article.clickTimees}</td>
                  <td>{article.content}</td>
                  <td>
                    {article.publishDate ? <TextFormat type="date" value={article.publishDate} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{article.title}</td>
                  <td>{article.category ? <Link to={`category/${article.category.id}`}>{article.category.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${article.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${article.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${article.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="jhipsterSampleApplicationApp.article.home.notFound">No Articles found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ article }: IRootState) => ({
  articleList: article.entities,
  loading: article.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Article);
