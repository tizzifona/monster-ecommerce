import {
    Thead,
    Tr,
    Th,
  } from "@chakra-ui/react";

function TableThead() {
  return (
    <Thead>
        <Tr>
            <Th>Id</Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Feature</Th>
            <Th>Actions</Th>
        </Tr>
    </Thead>
  )
}

export default TableThead