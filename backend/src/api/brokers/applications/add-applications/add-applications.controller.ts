// import { Body, Controller, HttpCode, HttpStatus, Inject, Post, UseGuards } from '@nestjs/common';
// import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { BrokerGuard } from '../../broker.guard';
// import { AddApplicationDto, AddApplicationResponseDto } from './add-application.dto';
// import { Application } from 'src/models/applications/application.entity';
// import { APPLICATION_REPOSITORY } from 'src/common/constants/repositories';
// import { ApplicationStatus } from 'src/enums/application-status.enum';
// import User from 'src/common/decorators/user';
// import { BrokerDto } from 'src/models/brokers/broker.dto';

// @Controller('brokers/applications/add-applications')
// @ApiTags('Broker API')
// export class AddApplicationsController {
//     constructor(
//         @Inject(APPLICATION_REPOSITORY)
//         private applicationEntity: typeof Application,
//     ) { }

//     @Post()
//     @UseGuards(BrokerGuard)
//     @ApiBearerAuth('BROKER')
//     @HttpCode(HttpStatus.CREATED)
//     @ApiOperation({ summary: 'Add a new broker application' })
//     @ApiResponse({ status: HttpStatus.CREATED, type: AddApplicationResponseDto })
//     async addApplication(
//         @User() user: BrokerDto,
//         @Body() addApplicationDto: AddApplicationDto,
//     ): Promise<AddApplicationResponseDto> {
//         const newApplication = await this.applicationEntity.create({
//             ...addApplicationDto,
//             brokerId: user.id,
//             status: ApplicationStatus.Submitted,
//         });

//         return {
//             message: 'Application created successfully',
//             applicationId: newApplication.id,
//         };
//     }
// }
