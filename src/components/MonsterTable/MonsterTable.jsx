import {
    Box,
    Table,
  } from "@chakra-ui/react";
import TableThead from "./TableThead";
import TableBody from "./TableBody";

function MonsterTable({ monsters, onFeaturedChange }) {
  return (
    <Box overflow="auto">
        <Table variant="simple" colorScheme="whiteAlpha">
            <TableThead/>
            <TableBody monsters={monsters} onFeaturedChange={onFeaturedChange}/>
        </Table>
    </Box>
  )
}

export default MonsterTable
