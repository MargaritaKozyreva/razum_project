export default class Service {
  getData = () => {
    return {
      objects: [
        {
          id: 4325646365474,
          type: "course",
          title: "Course - 1",
          url: "/photo/1",
          timeLimit: 30,
          state: 1,
          progress: 24,
          is_required: true,
          deadline: "11.09.2019"
        },
        {
          id: 7675758675468,
          type: "course",
          title: "Course - 2",
          url: "/photo/2",
          timeLimit: 40,
          state: 0,
          progress: 0,
          is_required: false,
          deadline: false
        },
        {
          id: 46576575876856,
          type: "course",
          title: "Course - 3",
          url: "/photo/3",
          timeLimit: 35,
          state: 4,
          progress: 100,
          is_required: true,
          deadline: "11.09.2019"
        },
        {
            id: 64576465756758,
            type: "course",
            title: "Course - 4",
            url: "/photo/3",
            timeLimit: 55,
            state: 4,
            progress: 100,
            is_required: true,
            deadline: "11.09.2019"
          },
        {
          id: 43256453654756,
          type: "training",
          title: "training - 1",
          url: "/photo/1",
          timeLimit: false,
          state: 1,
          progress: false,
          is_required: true,
          startDate: "19.09.2019"
        },
        {
          id: 4325645365474,
          type: "training",
          title: "training - 2",
          url: "/photo/2",
          timeLimit: false,
          state: 4,
          progress: false,
          is_required: true,
          startDate: "21.09.2019"
        },
        {
          id: 43256453654754,
          type: "training",
          title: "training - 3",
          url: "/photo/3",
          timeLimit: false,
          state: 4,
          progress: false,
          is_required: false,
          startDate: "03.09.2019"
        },
        {
          id: 564577567658958,
          type: "post-training",
          title: "post-training - 1",
          url: "/photo/1",
          timeLimit: 14,
          state: 4,
          progress: false,
          is_required: true,
          dealine: "29.09.2019"
        },
        {
          id: 445329980785678,
          type: "post-training",
          title: "post-training - 2",
          url: "/photo/2",
          timeLimit: 60,
          state: 3,
          progress: false,
          is_required: true,
          dealine: "11.08.2019"
        },
        {
          id: 24543786854663354,
          type: "post-training",
          title: "post-training - 3",
          url: "/photo/3",
          timeLimit: 12,
          state: 3,
          progress: false,
          is_required: false,
          dealine: "07.08.2019"
        },
        {
          id: 564577567658658,
          type: "test",
          title: "test - 1",
          url: "/photo/1",
          timeLimit: 20,
          state: 1,
          progress: 40,
          is_required: false,
          deadline: "11.09.2019"
        },
        {
          id: 445329987785678,
          type: "test",
          title: "test - 2",
          url: "/photo/2",
          timeLimit: 45,
          state: 0,
          progress: 0,
          is_required: true,
          deadline: "11.09.2019"
        },
        {
          id: 24543786854663355,
          type: "test",
          title: "test - 3",
          url: "/photo/3",
          timeLimit: 40,
          state: 4,
          progress: 100,
          is_required: true,
          deadline: "11.09.2019"
        }
      ]
    };
  };

  _transformData = data => {
    if (data.type === "course" || data.type === "test") {
      let changeStatus = data => {
        let status = "";
        switch (data.state) {
          case 0:
            status = "Назначен";
            break;

          case 1:
            status = "В процессе";
            break;

          case 3:
            status = "Не пройден";
            break;

          case 4:
            status = "Пройден";
            break;

          default:
            status = "";
        }
        return status;
      };

      return {
        id: data.id,
        type: data.type,
        title: data.title,
        url: data.url,
        timeLimit: data.timeLimit,
        state: changeStatus(data),
        progress: data.progress,
        is_required:
        data.is_required === true ? "Обязательный" : "Рекомендованный",
        deadline: data.deadline
      };
    }

    if (data.type === "post-training") {
        let changeStatus = data => {
          let status = "";
          switch (data.state) {
            case 0:
              status = "Назначен";
              break;
  
            case 1:
              status = "В процессе";
              break;
  
            case 3:
              status = "Не пройден";
              break;
  
            case 4:
              status = "Выполнен";
              break;
  
            default:
              status = "";
          }
          return status;
        };
  
        return {
            id: data.id,
            type: data.type,
            title: data.title,
            url: data.url,
            timeLimit: data.timeLimit,
            state: changeStatus(data),
            progress: data.progress,
            dealine: data.deadline
        };
      }

    if (data.type === "training") {
      return {
        id: data.id,
        type: data.type,
        title: data.title,
        url: data.url,
        timeLimit: data.timeLimit,
        state: data.state,
        progress: data.progress,
        is_required: data.is_required === true ? "Обязательный" : "Рекомендованный",
        startDate: data.startDate
      };
    }
  };

  _getTransformData = () => {
    let items = this.getData();
    return items.objects.map(elem => this._transformData(elem));
  };
}
