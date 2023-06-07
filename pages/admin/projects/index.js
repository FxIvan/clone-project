import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

export default function FullFeaturedCrudGrid({ tokens }) {
  const [rows, setRows] = React.useState(tokens);
  const [rowModesModel, setRowModesModel] = React.useState({});

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
      const id = tokens.length + 1;
      // Set template data for a new project
      const emptyToken = {
        token_id: id,
        token_price: 0,
        ticker: "",
        name: "",
        description: "",
        token_status: "",
        token_twitter: "",
        token_telegram: "",
        token_website: "",
      };

      // We add an empty row to the grid
      // SET API create token

      setRows((oldRows) => [...oldRows, emptyToken]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => async () => {
    const editedRow = rows.find((row) => row.token_id === id);
  
    const {
      token_price,
      token_max_amount,
      token_address,
      ticker,
      name,
      description,
      token_status,
      token_twitter,
      token_telegram,
      token_website,
    } = editedRow;
  
    const updatedData = {
      token_price,
      token_max_amount,
      token_address,
      ticker,
      name,
      description,
      token_status,
      token_twitter,
      token_telegram,
      token_website,
    };
  
    console.log("updatedData", updatedData);
  
    try {
      const response = await axios.put(`http://localhost:6000/api/tokens/${id}`, JSON.stringify(updatedData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle the successful response
      console.log("Row updated successfully:", response.data);
      // Optionally, you can update the rows state with the updated data received from the server
  
      // Set the row mode to View mode
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    } catch (error) {
      // Handle the error
      console.error("Error updating row:", error);
      // Optionally, you can display an error message to the user
    }
  };
  

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.token_id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.token_id === newRow.token_id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { id:1 ,field: "token_id", headerName: "ID", width: 100, editable: false },
    { id:2 ,field: "token_price", headerName: "Price", width: 100, editable: true, type: "number" },
    { id:3 ,field: "token_max_amount", headerName: "Max Amount", width: 100, editable: true, type: "number" },
    { id:4 ,field: "token_address", headerName: "Address", width: 100, editable: true, type: "string" },
    { id:5 ,field: "ticker", headerName: "Ticker", width: 100, editable: true, type: "string" },
    { id:6 ,field: "name", headerName: "Name", width: 100, editable: true, type: "string" },
    { id:7 ,field: "description", headerName: "Description", width: 100, editable: true, type: "string" },
    { id:8 ,field: "token_status", headerName: "Status", width: 100, editable: true, type: "string" },
    { id:9 ,field: "token_twitter", headerName: "Twitter", width: 100, editable: true, type: "string" },
    { id:10 ,field: "token_telegram", headerName: "Telegram", width: 100, editable: true, type: "string" },
    { id:11 ,field: "token_website", headerName: "Website", width: 100, editable: true, type: "string" },
    { id:12 ,field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} key={id} />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              key={id}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            key={id}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            key={id}
          />,
        ];
      },
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <DataGridPro
            getRowId={(row) => row.token_id}
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slots={{
              toolbar: EditToolbar,
            }}
            slotProps={{
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = (await axios.get("http://localhost:6000/api/tokens", { responseType: "json" })).data;
  const tokens = await res;
  return {
    props: {
      tokens: tokens.tokens,
    },
  };
};
