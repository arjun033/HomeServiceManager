﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HSM.Entity
{
    public class Request
    {
        public int id { get; set; }
        public int RequesterId { get; set; }
        public int RoleId { get; set; }
        public int CaregiverId { get; set; }
        public int ServiceId { get; set; }
        public int Status { get; set; }
        public DateTime ScheduleDate { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Comments { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime ModifiedOn { get; set; }

        public string Address { get; set; }
        public string serviceName { get; set; }
    }

}

