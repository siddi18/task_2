import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createDessertData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function createCarData(name, speed, horsepower, weight) {
  return { name, speed, horsepower, weight };
}

function createBikeData(name, engine, topSpeed, mileage) {
  return { name, engine, topSpeed, mileage };
}

function createCityData(name, population, country, area) {
  return { name, population, country, area };
}


const dessertRows = [
  createDessertData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDessertData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDessertData('Eclair', 262, 16.0, 24, 6.0),
  createDessertData('Cupcake', 305, 3.7, 67, 4.3),
  createDessertData('Gingerbread', 356, 16.0, 49, 3.9),
];

const carRows = [
  createCarData('Tesla Model S', 200, 670, 1961),
  createCarData('Ford Mustang', 250, 450, 1650),
  createCarData('Chevrolet Camaro', 240, 650, 1700),
  createCarData('BMW M3', 230, 473, 1653),
  createCarData('Audi RS5', 250, 444, 1710),
];

const bikeRows = [
  createBikeData('Yamaha R1', '998cc', 299, '15 kmpl'),
  createBikeData('Ducati Panigale V4', '1103cc', 299, '14 kmpl'),
  createBikeData('BMW S1000RR', '999cc', 303, '16 kmpl'),
  createBikeData('Suzuki Hayabusa', '1340cc', 299, '12 kmpl'),
  createBikeData('Kawasaki Ninja H2', '998cc', 400, '10 kmpl'),
];

const cityRows = [
  createCityData('Tokyo', '37.4 million', 'Japan', '2,194 km²'),
  createCityData('Delhi', '31 million', 'India', '1,484 km²'),
  createCityData('Shanghai', '27 million', 'China', '6,340 km²'),
  createCityData('São Paulo', '22 million', 'Brazil', '1,521 km²'),
  createCityData('Mumbai', '20 million', 'India', '603 km²'),
];

export default function CustomizedTables() {
  const [tableType, setTableType] = useState('desserts');

  const handleButtonClick = (type) => {
    setTableType(type);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={"img.jpeg"}
          alt="Welcome"
          style={{ width: '400px', height: '200px' }}
        />
      </div>

      <div style={{ marginTop: '40px', width: '60%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <Button color='black' variant="outlined" onClick={() => handleButtonClick('desserts')} style={{ marginRight: 10 }}>
          Top Desserts
        </Button>
        <Button color='black' variant="outlined" onClick={() => handleButtonClick('cars')} style={{ marginRight: 10 }}>
          Top Cars
        </Button>
        <Button color='black' variant="outlined" onClick={() => handleButtonClick('bikes')} style={{ marginRight: 10 }}>
          Top Bikes
        </Button>
        <Button color='black' variant="outlined" onClick={() => handleButtonClick('cities')}>
          Top Cities
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Top {`${tableType}`}</h2>
      </div>

      <TableContainer component={Paper} sx={{ width: '60%', margin: '0 auto' }} style={{ marginTop: 40 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableType === 'desserts' ? (
                <>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </>
              ) : tableType === 'cars' ? (
                <>
                  <StyledTableCell>Car Model</StyledTableCell>
                  <StyledTableCell align="right">Top Speed&nbsp;(mph)</StyledTableCell>
                  <StyledTableCell align="right">Horsepower</StyledTableCell>
                  <StyledTableCell align="right">Weight&nbsp;(kg)</StyledTableCell>
                </>
              ) : tableType === 'bikes' ? (
                <>
                  <StyledTableCell>Bike Model</StyledTableCell>
                  <StyledTableCell align="right">Engine</StyledTableCell>
                  <StyledTableCell align="right">Top Speed&nbsp;(km/h)</StyledTableCell>
                  <StyledTableCell align="right">Mileage&nbsp;(kmpl)</StyledTableCell>
                </>
              ) : (
                <>
                  <StyledTableCell>City</StyledTableCell>
                  <StyledTableCell align="right">Population</StyledTableCell>
                  <StyledTableCell align="right">Country</StyledTableCell>
                  <StyledTableCell align="right">Area&nbsp;(km²)</StyledTableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableType === 'desserts'
              ? dessertRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))
              : tableType === 'cars'
                ? carRows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.speed}</StyledTableCell>
                    <StyledTableCell align="right">{row.horsepower}</StyledTableCell>
                    <StyledTableCell align="right">{row.weight}</StyledTableCell>
                  </StyledTableRow>
                ))
                : tableType === 'bikes'
                  ? bikeRows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.engine}</StyledTableCell>
                      <StyledTableCell align="right">{row.topSpeed}</StyledTableCell>
                      <StyledTableCell align="right">{row.mileage}</StyledTableCell>
                    </StyledTableRow>
                  ))
                  : cityRows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.population}</StyledTableCell>
                      <StyledTableCell align="right">{row.country}</StyledTableCell>
                      <StyledTableCell align="right">{row.area}</StyledTableCell>
                    </StyledTableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
