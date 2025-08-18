'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '@/lib/searchSlice';
import { RootState } from '../../lib/store';
import { SearchContainer } from '../SearchContainer/SearchContainer';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './/MainContainer.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const MainContainer = () => {
  const t = useTranslations();
  const params = useParams<{ page?: string; id?: string }>();
  const currentPage = parseInt(params?.page || '1', 10);
  const showDetails = !!params?.id;
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    if (!searchTerm) {
      const term = localStorage.getItem('searchTerm') || '';
      dispatch(setSearchTerm(term));
    }
  }, [dispatch, searchTerm]);

  if (isNaN(currentPage) || currentPage < 1) {
    return notFound();
  }

  return (
    <>
      <div className="main-container">
        <p className="app-description">{t('mainPage.description')}</p>
        <Image
          src="/graduation.png"
          alt="graduation"
          width={700}
          height={250}
        />
      </div>
      <SearchContainer />
      <ResultsContainer currentPage={currentPage} showDetails={showDetails} />
    </>
  );
};

export default MainContainer;
