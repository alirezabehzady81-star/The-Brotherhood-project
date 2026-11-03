"use client";
import { Pagination } from "@heroui/react";
import { useState } from "react";

function PagePagination() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  return (
    <Pagination dir="ltr" className="justify-center">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            className="border w-6.25 h-6.25 rounded-[25px] flex justify-center items-center"
            isDisabled={page === 1}
            onPress={() => setPage((p) => p - 1)}
          >
            <Pagination.PreviousIcon />
          </Pagination.Previous>
        </Pagination.Item>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Pagination.Item key={p}>
            <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
              {p}
            </Pagination.Link>
          </Pagination.Item>
        ))}
        <Pagination.Item>
          <Pagination.Next
            className="border w-6.25 h-6.25 rounded-[25px] flex justify-center items-center"
            isDisabled={page === totalPages}
            onPress={() => setPage((p) => p + 1)}
          >
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}

export { PagePagination };
