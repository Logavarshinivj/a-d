import Paper from "@mui/material/Paper";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { CardContent,Card } from "@mui/material";

export  function ColorsList() {
    const data = [
      {
        id: 1,
        title: "Primary",
        value: "#1cc88a",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 2,
        title: "Success",
        value: "#4e73df",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 3,
        title: "Info",
        value: "#36b9cc",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 4,
        title: "Danger",
        value: "#e74a3b",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 5,
        title: "Secondary",
        value: "#858796",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 6,
        title: "Light",
        value: "#f8f9fc",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 7,
        title: "Warning",
        value: "#f6c23e",
        icon: <CalendarTodayIcon />,
      },
      {
        id: 8,
        title: "Dark",
        value: "#5a5c69",
        icon: <CalendarTodayIcon />,
      },
    ];
  
    return (
      <div className="list-1">
      <div className="color-list">
        {data.map((data, index) => (
         
          <ColorBar data={data} key={index} />
         
        ))}
      </div>
      </div>
    );
  }
  
function ColorBar({ data }) {
  return (
    <div>
     <Card>
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          paddingLeft: "10px",
          backgroundColor: `${data.value}`,
        }}
      >
        <CardContent>
        <h3>{data.title} </h3>
        <p>{data.value}</p>
        </CardContent>
      </Paper>
      </Card>
    </div>
  );
}



