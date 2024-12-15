import { useEffect, useState, useRef, useCallback, ChangeEvent } from 'react';
import { Pagination as MUIPagination, type SelectChangeEvent } from '@mui/material';
import PaginationContainer from './PaginationContainer';
import PaginationOptions from './PaginationOptions';
import './styles/Style.scss';

interface IPaginationProps {
  totalRows?: number;
  page: number;
  pageSize: number;
  setPagination: (page: number, pageSize: number) => void;
  disabled?: boolean;
}

const Pagination = ({ totalRows = 0, page, pageSize, setPagination, disabled }: IPaginationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(totalRows / pageSize);

  const [isWrapped, setIsWrapped] = useState(false);

  const handlePageChange = useCallback(
    (_event: ChangeEvent<unknown>, newPage: number) => {
      setPagination(newPage, pageSize);
    },
    [setPagination, pageSize]
  );

  const handlePageSizeChange = useCallback(
    (event: SelectChangeEvent<number>) => {
      setPagination(1, event.target.value as number);
    },
    [setPagination]
  );

  const checkWrapping = useCallback(() => {
    if (containerRef.current && paginationRef.current && controlsRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const paginationWidth = paginationRef.current.scrollWidth;
      const controlsWidth = controlsRef.current.scrollWidth;
      const padding = 36;

      setIsWrapped(paginationWidth + padding + controlsWidth > containerWidth);
    }
  }, []);

  useEffect(() => {
    checkWrapping();
    window.addEventListener('resize', checkWrapping);

    return () => {
      window.removeEventListener('resize', checkWrapping);
    };
  }, [checkWrapping]);

  return (
    <PaginationContainer ref={containerRef} disabled={disabled} isWrapped={isWrapped}>
      <MUIPagination
        ref={paginationRef}
        count={totalPages}
        page={page}
        disabled={disabled}
        onChange={handlePageChange}
        color="primary"
        className="PaginationControls"
        showFirstButton
        showLastButton
      />
      <PaginationOptions
        pageSize={pageSize}
        totalRows={totalRows}
        handlePageSizeChange={handlePageSizeChange}
        ref={controlsRef}
      />
    </PaginationContainer>
  );
};

export default Pagination;
